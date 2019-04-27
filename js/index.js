// your code here
function showRepositories(){
  console.log(this.responseText);
  let repoLIst = '<ul>';
  for (var i = 0; i < this.responseText.length; i++) {
    repoLIst += '<li>' + this.responseText[i]['name'] + '</li>';
  }
  repoLIst += '</ul>';
  document.getElementById('repositories').innerHTML = repoList;
}
function getRepositories() {
  const req = new XMLHttpRequest();
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}