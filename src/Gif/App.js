import "./App.css";

import Gif from "./components/gif"

const renderGifs = () => data.filter((v) => v.rating === 'g')
    .map(v => <Gif key={v.id} url={v.url} title={v.title}/>)

  return (
    <div className="App">
      {renderGifs()}
    </div>
  );
