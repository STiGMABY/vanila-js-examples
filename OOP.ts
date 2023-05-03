const idGenerator = () => Date.now() * Math.random()

class User {

  public username: string
  public password: string
  private _id: number

  constructor(username, password) {
    this.username = username
    this.password = password
    this._id = idGenerator()
  }
}

console.log(User)