export class Message {
  public timestamp: number;
  constructor(
    public text: string,
    public source?: string
  ) {
    this.timestamp = Date.now();
  }
}
