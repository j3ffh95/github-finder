class Github {
  constructor() {
    this.client_id = "9aa14c69908b5f04c43c";
    this.client_secret = "2aaff10caf6d1d092bcddbbb9914d086630f67fa";
  }

  async getUser() {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
