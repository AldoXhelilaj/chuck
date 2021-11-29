import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, checkLog, add, remove, loadCategories, loadJokes } from './actions';
import Select from 'react-select';
import axios from 'axios';
import Loader from './images/loader.svg'




function App() {
  const [category, setCategories] = useState([]);
  const [loader, setLoader] = useState(true);
  { console.log(category + " VALUE") }
  //const counter = useSelector((state) => state.counter.count);
  // const login = useSelector((state) => state.isLogged.isLogged);
  // const list = useSelector(({ todo }) => todo.list);
  const categories = useSelector((categories) => categories.categories.categories);
  const jokes = useSelector((state) => state.categories.jokes);

  //  { console.log(jokes.map(c=>c.value)+" JOKES")}




  const dispatch = useDispatch();

  //const handleChange = (e) => {
  //   setTodo(e.target.value);
  // };



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
      setLoader(false);

      //  console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  //random api
  useEffect(() => {
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

    }).catch(function (error) {
      console.error(error);
    });
  }, [category])

  return (


    <div className="App">
      {loader ? (
        <div>
          <div className="options">
            <Select
              name="colors"
              options={categories}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(e) => setCategories(e.value)}
            />


          </div>
          <div>
            <ul>
              {jokes ?
                jokes.map((joke) =>
                  <li key={joke.id} >{joke.value}</li>
                )
                : null}
            </ul>
          </div>
        </div>
          ) : (
          <img src={Loader} />
          )
        }
    </div >
  );
}

export default App;
