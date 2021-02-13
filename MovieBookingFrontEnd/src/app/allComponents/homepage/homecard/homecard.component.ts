import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homecard',
  templateUrl: './homecard.component.html',
  styleUrls: ['./homecard.component.css']
})
export class HomecardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movies = [
    {
      title:"Batman",
      description :"Batman is the superhero protector of Gotham City, a tortured, brooding vigilante dressed as a sort of human bat who fights against evil and strikes fear into the hearts of criminals everywhere. In his public identity he is Bruce Wayne, billionaire industrialist and notorious playboy",
      type:"action , superheroes",          //enum
      genre :"action",
      duration: "2 :20 hours",
      releasedate:"18-07-2008"
    },
    {
      title:"Harry Potter",
      description :'Throughout the series, Harry is described as having his fathers perpetually untidy black hair, his mothers bright green eyes, and a lightning bolt-shaped scar on his forehead. He is further described as small and skinny for his age" with "a thin face" and "knobbly knees", and he wears round eyeglasses.',
      type:"fantasy , literature",          //enum
      genre :"friction",
      duration: "2 hours",
      releasedate:"12-04-1994"
    },
    {
      title:"Batman",
      description :"Batman is the superhero protector of Gotham City, a tortured, brooding vigilante dressed as a sort of human bat who fights against evil and strikes fear into the hearts of criminals everywhere. In his public identity he is Bruce Wayne, billionaire industrialist and notorious playboy",
      type:"action , superheroes",          //enum
      genre :"action",
      duration: "2 :20 hours",
      releasedate:"18-07-2008"
    },
    {
      title:"Harry Potter",
      description :'Throughout the series, Harry is described as having his fathers perpetually untidy black hair, his mothers bright green eyes, and a lightning bolt-shaped scar on his forehead. He is further described as small and skinny for his age" with "a thin face" and "knobbly knees", and he wears round eyeglasses.',
      type:"fantasy , literature",          //enum
      genre :"friction",
      duration: "2 hours",
      releasedate:"12-04-1994"
    },
    {
      title:"Batman",
      description :"Batman is the superhero protector of Gotham City, a tortured, brooding vigilante dressed as a sort of human bat who fights against evil and strikes fear into the hearts of criminals everywhere. In his public identity he is Bruce Wayne, billionaire industrialist and notorious playboy",
      type:"action , superheroes",          //enum
      genre :"action",
      duration: "2 :20 hours",
      releasedate:"18-07-2008"
    },
    {
      title:"Harry Potter",
      description :'Throughout the series, Harry is described as having his fathers perpetually untidy black hair, his mothers bright green eyes, and a lightning bolt-shaped scar on his forehead. He is further described as small and skinny for his age" with "a thin face" and "knobbly knees", and he wears round eyeglasses.',
      type:"fantasy , literature",          //enum
      genre :"friction",
      duration: "2 hours",
      releasedate:"12-04-1994"
    },
    {
      title:"Batman",
      description :"Batman is the superhero protector of Gotham City, a tortured, brooding vigilante dressed as a sort of human bat who fights against evil and strikes fear into the hearts of criminals everywhere. In his public identity he is Bruce Wayne, billionaire industrialist and notorious playboy",
      type:"action , superheroes",          //enum
      genre :"action",
      duration: "2 :20 hours",
      releasedate:"18-07-2008"
    },
    {
      title:"Harry Potter",
      description :'Throughout the series, Harry is described as having his fathers perpetually untidy black hair, his mothers bright green eyes, and a lightning bolt-shaped scar on his forehead. He is further described as small and skinny for his age" with "a thin face" and "knobbly knees", and he wears round eyeglasses.',
      type:"fantasy , literature",          //enum
      genre :"friction",
      duration: "2 hours",
      releasedate:"12-04-1994"
    }

  ]

}
