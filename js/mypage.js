function mypageSet() {
    let navId = document.getElementById('navId').value
    let navName = document.getElementById('navName').value
    let navPwd = document.getElementById('navPwd').value
    let navPwCheck = document.getElementById('navPwCheck').value
    
    localStorage.setItem(1, navName);
    localStorage.setItem(2, navId);
    localStorage.setItem(3, navPwd);
    localStorage.setItem(4, navPwCheck);
}
