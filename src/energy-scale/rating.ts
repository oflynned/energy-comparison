export type Range = {
  lower: number;
  upper: number;
};

export class Rating {
  constructor(
    readonly range: Range,
    readonly label: string,
  ) {}
}
