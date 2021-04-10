import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { Header, List } from 'semantic-ui-react';





function App() {

  const urlActivities = "http://localhost:5000/api/activities";

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get(urlActivities).then(res => {
      console.log(res);
      setActivities(res.data);
    })
  }, []);


  return (
    <div>
      <Header as="h1" icon="users" content="dot-project" />
      <List>
        {activities.map((el: any) => (
            <List.Item key={el.id}>
              {el.title}
            </List.Item>
        ))}
      </List>
           

        

    </div>
  );
}

export default App;
