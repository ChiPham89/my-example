export class User {
  private userName: string;
  private displayName: string;
  private password:string;

  constructor(userName?: string, displayName?: string, password?:string) {
    this.userName = userName ? userName : "";
    this.displayName = displayName ? displayName : "";
    this.password = password ? password : "";
  }

  public getUserName(): string {
    return this.userName;
  }

  public getDisplayName(): string {
    return this.displayName;
  }

  public setDisplayName(displayName: string): void {
    this.displayName = displayName;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword(password: string): void {
    this.password = password;
  }
}
