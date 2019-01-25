# querys examples

# myFavMovies

```
{
  myFavMovies {
	    id
      title
      poster_path
      overview
      genres {
        id
        name
      }
    similar {
      title
      genres{
        id
        name
      }
      poster_path
    }
  }
}
```

#movie by id

```
{
  movie(id: 421) {
	    id
      title
      poster_path
      overview
      genres {
        id
        name
      }
    similar {
      title
      genres{
        id
        name
      }
      poster_path
    }
  }
}
```

#TODO : es6 :( config babel
