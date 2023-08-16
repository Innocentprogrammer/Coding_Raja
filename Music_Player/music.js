
        //getting all elements of html in js
        let song_image = document.getElementById("cover_photo")
        let song_title = document.getElementById("title")
        let song_play = document.getElementById("play")
        let song_prev = document.getElementById("prev")
        let song_next = document.getElementById("next")
        console.log(song_play)
        //creating song object list
        let songs_list = [
            {
                name: 'Tere Pubg Ki Game Na',
                Image: 'image.jpg',
                Song: 'm.mp3',
            },
            {
                name: 'Tu Bhi Sataya jayega',
                Image: 'image.jpg',
                Song: 'm1.mp3',
            },
            {
                name: 'Zihaal E Miskin',
                Image: 'image.jpg',
                Song: 'm2.mp3',
            },
            {
                name: 'Sankat Mochan Hanuman',
                Image: 'image.jpg',
                Song: 'm3.mp3',
            },
            {
                name: 'Hey Bajarangbali Vinti Sunle Hamar',
                Image: 'image.jpg',
                Song: 'm4.mp3',
            },
            {
                name: 'Jai Shree Ram',
                Image: 'image.jpg',
                Song: 'm5.mp3',
            },
            {
                name: 'Mahabharat ki Kahani',
                Image: 'image.jpg',
                Song: 'm6.mp3',
            },
            {
                name: 'Mere Bharat Ka Bacha Bacha',
                Image: 'image.jpg',
                Song: 'm7.mp3',
            },
            {
                name: 'Naach Meri Rani',
                Image: 'image.jpg',
                Song: 'm8.mp3',
            },
            {
                name: 'Pal Pal dil Ke Pass',
                Image: 'image.jpg',
                Song: 'm9.mp3',
            }
        ]
        //keeping track of which song is playing and if song is playing or not
        let i = 0;
        let flag = false;
        //showing song name and image on screen
        var audio = new Audio(songs_list[i].Song);
        song_image.src = songs_list[i].Image
        song_title.innerHTML = songs_list[i].name
        //function to play/pause song
        song_play.addEventListener("click", function () {
            if (flag === false) {
                audio.play()
                flag = true;
                console.log(flag)
            }
            else {
                audio.pause()
                flag = false;
                console.log(flag)
            }
        })
        //function to play next song
        song_next.addEventListener("click", function () {
            audio.pause()
            flag = false;
            i = i + 1;
            if (i >= songs_list.length) {
                i = 0;
            }
            console.log(i)
            song_image.src = songs_list[i].Image
            song_title.innerHTML = songs_list[i].name
            audio = new Audio(songs_list[i].Song)
            if (flag === false) {
                audio.play()
                flag = true;
                console.log(flag)
            }
        })
        //function to play previous song
        song_prev.addEventListener("click", function () {
            audio.pause()
            flag = false;
            i = i - 1;
            if (i <= 0) {
                i = songs_list.length - 1;
                console.log(i)
            }
            song_image.src = songs_list[i].Image
            song_title.innerHTML = songs_list[i].name
            audio = new Audio(songs_list[i].Song)
            if (flag === false) {
                audio.play()
                flag = true;
                console.log(flag)
            }
        })
    
