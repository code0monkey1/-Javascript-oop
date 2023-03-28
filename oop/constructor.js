  function SoftwareDeveloper() {
        this.favoriteLanguage = 'JavaScript';
      }

  const developer = new SoftwareDeveloper();

  console.log(developer.favoriteLanguage)

  console.log(developer) 
 
  console.log(SoftwareDeveloper)

  console.log(typeof developer )

  console.log( developer instanceof SoftwareDeveloper?"developer is an instance of SoftwareDeveloper":"Developer is not an instance of Object")