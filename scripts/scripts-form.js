function changeImages(){
    let logo = document.getElementById('logo');
    let note = document.getElementById('note-icon');
    let search = document.getElementById('search-icon');    
    let changer = document.getElementById('changer');
    if (changer.className === 'dark-theme'){
      logo.src = 'images/logo-dark.png';
      note.src = 'images/note-dark.png';
      search.src = 'images/search-dark.png'
    } else {
        logo.src = 'images/logo-light.png';
        note.src = 'images/note-light.png';
        search.src = 'images/search-light.png';
    }
  }

  function changeTheme(){
    let changer = document.getElementById('changer');    
    changer.classList.toggle('light-theme');
    changer.classList.toggle('dark-theme');    
    
    changeImages();      
  }