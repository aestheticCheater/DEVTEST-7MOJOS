

export class Model {
    outOfCredits: boolean = false;
    private credits: number = 100;
    private bet: number = 5;
    private moneyWon: number = 10

  private static instance: Model;

  public static getInstance(): Model {
      if(!this.instance) {
          this.instance = new Model();
      }

      return this.instance;
  }
  
  public resetGame() {
      this.credits = 100;
      this.bet = 5;
      this.moneyWon = 0;

  }

  public setCredits(total: number) {
      this.credits = total;
    }
    public setBet(total: number) {
        this.bet = total;
    }
    public setWinningAmount(total: number) {
        this.moneyWon = total;
    }

  public decrement() {
    if (!this.outOfCredits) {
        this.credits -= this.bet;
    }
    if (this.credits - this.bet < 0) {
        this.outOfCredits = true;
    }
  }

  public getCredits(): number {
      return this.credits;
  }

  public getBet(): number {
      return this.bet;
    }
    
    public getWinningAmount(): number {
        return this.moneyWon;
    }

    public incrementCredits() {
        this.credits += this.bet * 2;
        this.setWinningAmount(this.bet * 2)
    }



}