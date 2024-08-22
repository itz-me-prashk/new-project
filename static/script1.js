document.getElementById('show-signup').addEventListener('click', function() {
    document.querySelector('.sign-in-container').style.transform = 'translateX(-100%)';
    document.querySelector('.sign-up-container').style.transform = 'translateX(0)';
});

document.getElementById('show-signin').addEventListener('click', function() {
    document.querySelector('.sign-in-container').style.transform = 'translateX(0)';
    document.querySelector('.sign-up-container').style.transform = 'translateX(100%)';
});



// document.getElementById('signin-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Sign In form submitted!');
//     // Add your sign-in logic here
// });

// document.getElementById('signup-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Sign Up form submitted!');
//     // Add your sign-up logic here
// });
//  