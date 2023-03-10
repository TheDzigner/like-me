    

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDu1-SzNMQJeH88mFvN8jlvnYoT9s4Jw34",

  authDomain: "like-button-de05a.firebaseapp.com",

  projectId: "like-button-de05a",

  storageBucket: "like-button-de05a.appspot.com",

  databaseURL : 'https://like-button-de05a-default-rtdb.firebaseio.com/', 

  messagingSenderId: "186196445120",

  appId: "1:186196445120:web:bb4c1b7d792bcf1d1d2a25",

  measurementId: "G-J1C8R1XS1Z"

};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const database = firebase.database().ref();

const likeRef = database.child("like");

      const likeBtn  = document.querySelector('.like-btn');

      const showLikesNum = document.querySelector('.showLikesNum');

  

      const retrieveLike = localStorage.getItem('liked');

  

      function persisteLiked() {

        if (retrieveLike) {

          likeBtn.classList.add('liked');

        } else {

          likeBtn.classList.remove('liked');

        }

      }

  

      persisteLiked();

  

      function like() {

        if (likeBtn.classList.contains('liked')) {

          likeBtn.classList.remove('liked');

          localStorage.removeItem('liked', 'liked');

          likeRef.transaction(function(likeCount) {

            return (likeCount || 0) - 1;

          });

        } else {

          likeBtn.classList.add('liked');

          localStorage.setItem('liked', 'liked');

          likeRef.transaction(function(likeCount) {

            return (likeCount || 0) + 1;

          });

        }

      };

  

      likeRef.on("value", function(snapshot) {

        showLikesNum.textContent = snapshot.val();

      });

  

      likeBtn.onclick = like;

    

