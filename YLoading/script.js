let audio = new Audio();
var request = new XMLHttpRequest();
function Main(){
    return{
        DiscordInviteLink: "https://discord.gg/minigamesfr",
        musicAutoplay: true, // Set this to true if you want the music to autoplay
        musicVolume: 0.1, // Set the volume that you like (0 = 0% ; 0.5 = 50% ; 1 = 100%)
        musicList: [
            {label: 'Jefe',author: 'NINHO',src: 'audio/jefe.mp3'},
            {label: 'PAS BÊTE',author: 'BEENDO Z',src: 'audio/music.mp3'},
            {label: 'Tout les Français',author: 'CHIRAC',src: 'audio/toutlesfr.mp3'},
        ],
        isMusicPlaying: false,
        musicOpen: false,
        currentSong: 0,
        listen(){
            if(this.musicAutoplay){
                setTimeout(() => { this.play();}, 100);
            }
        },
        selectBtn(select){
            this.buttons.forEach(function(button){
                button.selected = false;
            });
            return true;
        },
        play(){
            audio.src = this.musicList[this.currentSong].src;
            audio.load();
            audio.play();
            audio.volume = this.musicVolume;
            this.isMusicPlaying = true;
        },
        pause(){
            audio.pause()
            this.isMusicPlaying = false;
        },
        next(){
            if(this.isMusicPlaying){
                audio.pause()
            }
            if(this.currentSong < this.musicList.length-1){
                this.currentSong++;
            }else{
                this.currentSong = 0;
            }
            audio.src = this.musicList[this.currentSong].src;
            audio.load();
            audio.play();
            this.isMusicPlaying = true;
        },
        prev(){
            if(this.isMusicPlaying){
                audio.pause()
            }
            if(this.currentSong != 0){
                this.currentSong = this.currentSong-1;
            }else{
                this.currentSong = this.musicList.length-1;
            }
            audio.src = this.musicList[this.currentSong].src;
            audio.load();
            audio.play();
            this.isMusicPlaying = true;
        },
    }
}


window.addEventListener('message', function(e)
{
    switch(e.data.eventName){
        case 'loadProgress':
            document.querySelector('.loadingbar-loaded').style.width = (e.data.loadFraction * 100) + '%'
            break;
        case 'onLogLine':
            document.querySelector('.loadingbar-loaded').style.width = '100%'
            break;
    }
});