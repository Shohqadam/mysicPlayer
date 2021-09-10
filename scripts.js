
        const musicContainer = document.querySelector('.musicContainer')
        const playBtn = document.querySelector('#play')
        const prevBtn = document.querySelector('#prev')
        const nextBtn = document.querySelector('#next')
        const audio = document.querySelector('#audio')
        const progress = document.querySelector('.progress')
        const progressDot = document.querySelector('.progressDot')
        const progressContainer = document.querySelector('.progressContainer')
        const title = document.querySelector('#title')
        const startTime = document.querySelector('#startTime')
        const endTime = document.querySelector('#endTime')
        
        
        //Song TITLES
        
        const songs = ['Massa', 'Katana ft Massa', 'Clean Bandit']
        //KEEP TRACK OF SONGS
        let songIndex = 0
        //INITIALLY LOAD INFO DOM
        
        loadSong(songs[songIndex])
        
        //Update song details
        function loadSong(song){
            title.innerText = song
            audio.src = `music/${song}.mp3`
            cover.src = `images/${song}.jpg`
        }
        
        function playSong() {
            musicContainer.classList.add('play')
            playBtn.querySelector('i.fas').classList.remove('fa-play')
            playBtn.querySelector('i.fas').classList.add('fa-pause')
        
            audio.play()
        
        }
        function pauseSong() {
            musicContainer.classList.remove('play')
            playBtn.querySelector('i.fas').classList.add('fa-play')
            playBtn.querySelector('i.fas').classList.remove('fa-pause')
        
            audio.pause()
        }
        
        
        function prevSong(){
            songIndex--
            if(songIndex < 0){
                songIndex = songs.length - 1
            }
            loadSong(songs[songIndex])
            playSong()
        }
        
        function nextSong(){
            songIndex++
            if(songIndex > songs.length - 1){
                songIndex = 0
            }
            loadSong(songs[songIndex])
            playSong()
        }
        
        function updateProgress(e){
            const {duration, currentTime} = e.srcElement
            const progressPercent = (currentTime / duration) * 100
            progress.style.width = `${progressPercent}%`
            }
        
             function startTimeFunc(e){
                startTime.textContent = e.srcElement.currentTime.toFixed(0)
                }
        
             function endTimeFunc(e){ 
               let endFixed = endTime.textContent = e.srcElement.duration.toFixed(0)
            }
        function setProgress(e){
            const width = this.clientWidth
            const clickX = e.offsetX
            const duration = audio.duration
            audio.currentTime = (clickX / width) * duration
            }
        
        //EVENT LISTENERS
        playBtn.addEventListener('click', () => {
            const isPlaying = musicContainer.classList.contains('play')
            if(isPlaying){
                pauseSong()
            }else{
                playSong()
            }
            
            })

        //CHANGE SONG EVEMTS
        audio.addEventListener('timeupdate', startTimeFunc)
        audio.addEventListener('timeupdate', endTimeFunc)
        
        
        prevBtn.addEventListener('click', prevSong)
        nextBtn.addEventListener('click', nextSong)
        audio.addEventListener('timeupdate', updateProgress)
        progressContainer.addEventListener('click', setProgress)
    audio.addEventListener('ended', nextSong)
        