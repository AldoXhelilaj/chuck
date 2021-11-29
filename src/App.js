import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCategories, loadJokes } from './actions';
import Select from 'react-select';
import axios from 'axios';
import Loader from './images/loader01.svg'
import Chuck from './images/chuck.png'





function App() {
  const [category, setCategories] = useState([]);
  const [loader, setLoader] = useState(true);
  const categories = useSelector((categories) => categories.categories.categories);
  const jokes = useSelector((state) => state.categories.jokes);


  const dispatch = useDispatch();

  //category api
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/categories',
      headers: {
        accept: 'application/json',
        'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        'x-rapidapi-key': 'e25301e04dmsh31f9c5ebf3e37a7p170819jsn9431b24db215'
      }
    };

    axios.request(options).then(function (response) {

      dispatch(loadCategories((response.data)))

    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  //random api
  useEffect(() => {
    setLoader(false);
    if (category.length > 0) {
      setLoader(true);

      var options = {
        method: 'GET',
        url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
        params: { category: category },
        headers: {
          accept: 'application/json',
          'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
          'x-rapidapi-key': 'e25301e04dmsh31f9c5ebf3e37a7p170819jsn9431b24db215'
        }
      };

      axios.request(options).then(function (response) {
        dispatch(loadJokes(response.data))

        setLoader(false);

      }).catch(function (error) {
        console.error(error);
      });

    }
  }, [category])



  return (


    <div className="App">
      <div className="chuck">
        <img src={Chuck} />
      </div>
      <div className="wrapper-chuck">
        <div className="options">
          <div className="labels">
            <h2>Let’s find a joke for you!</h2>
          </div>
          <Select
            name="colors"
            options={categories}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => setCategories(e.value)}
          />


        </div>
        {!loader ? (
          <div className="facts">
            <ul>
              {jokes ?
                jokes.map((joke) =>
                  <li key={joke.id} >{joke.value}</li>
                )
                : null}
            </ul>

          </div>
        ) : (
          <img className="loader" src={Loader} />
        )
        }
      </div>
      <footer>
        <p>© 2021 Aldo Xhelilaj</p>
      </footer>
    </div>
  );
}

export default App;
