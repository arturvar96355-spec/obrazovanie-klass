import { discounts, programs, type Program, type ProgramId } from '@/content/prices';

export interface ChildInput { program: ProgramId; honors: boolean }
export interface ChildResult {
  program: Program;
  base: number;
  discount: number;
  discountLabel: string;
  yearly: number;
  monthly: number;
}
export interface Quote { children: ChildResult[]; yearly: number; monthly: number }

export function getProgram(id: ProgramId): Program {
  return programs.find((p) => p.id === id) ?? programs[0];
}

/** Скидки не суммируются — берётся наибольшая (D-05). Порядок детей — порядок в списке. */
export function calculate(children: ChildInput[], hasReg: boolean): Quote {
  const results = children.map((c, i): ChildResult => {
    const program = getProgram(c.program);
    const base = hasReg ? program.withReg : program.withoutReg;
    const options: [number, string][] = [];
    if (i === 1) options.push([discounts.second, 'второй ребёнок −10%']);
    if (i >= 2) options.push([discounts.third, 'третий ребёнок −20%']);
    if (c.honors && program.honors) options.push([discounts.honors, 'отличник −10%']);
    const best = options.sort((a, b) => b[0] - a[0])[0] ?? [0, ''];
    const yearly = Math.round(base * (1 - best[0]));
    return { program, base, discount: best[0], discountLabel: best[1], yearly, monthly: yearly / program.months };
  });
  return {
    children: results,
    yearly: results.reduce((s, r) => s + r.yearly, 0),
    monthly: results.reduce((s, r) => s + r.monthly, 0),
  };
}
