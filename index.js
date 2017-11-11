class BoardMember {
  constructor(name, homeState, training) {
    this.name = name
    this.homeState = homeState
    this.training = training
  }

  veto() {
    return 'No, I must disagree'
  }

  approver() {
    return 'You can do that!'
  }
}
