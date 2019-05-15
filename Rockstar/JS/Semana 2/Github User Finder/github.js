class GitHub{
 constructor() {
  this.client_id = "9689b71ff11a2caa7858"; //From GitHub OAuth App
  this.client_secret = "72755c43c073eae54d85bd42645d0c64b57b460e";
 }
 
 async getUser(user) {
  const profileResponse = await fetch(
   `https://api.github.com/users/${user}?client_id=${
     this.client_id
  }$client_secret=${this.client_secret}`
  );

  const profile = await profileResponse.json();


  const repository= await fetch(`https://api.github.com/users/${user}/repos?
    client_id=${this.client_id}$client_secret=${this.client_secret}`
 );

 const repo=await repository.json();
  return { profile, repo };
 }
}

