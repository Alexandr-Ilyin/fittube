import * as React from 'react';
import { VideoList } from "./mainList";
import Videos from "./videos.json";

import * as classes from "./main.module.scss";
import { HashRouter as Router, Link, Redirect, Route, Switch } from "react-router-dom";

export class Main extends React.Component {
  render() {
    return <Router>
        <Switch>
          <Route path="/menu">
            <Root />
          </Route>
                    <Route path="/list/:index" component={List}>
                    </Route>

          <Redirect from="/" to="menu" />
        </Switch>
    </Router>
  }

}

export class Root extends React.Component {
  render() {
    return <div className={classes['bg']}>
      <div className={classes['bgcolor']}>

            {VideoList.map((x, i) => <div className={classes["item"]}>
      <Link to={"/list/" + i}>
      {x.title}
      </Link></div>)}



      </div>
    </div>
      ;
  }
}

export class List extends React.Component<any, any> {
  render() {

    let v = VideoList[this.props.match.params.index];
    let playlists = v.videos;
    let videos = Videos.filter(x => playlists.find(z => z == x.ListTitle));
    return <div className={classes['bg']}>
      <div className={classes['bgcolor']}>
      <h1>
        <Link to={"/"}>
                  {v.title}

        </Link>
      </h1>
        {videos.map(x => {
          return <div className={classes['item']}>
        {process.env.PUBLIC_URL}
            <a href={x.DownloadedUrl}> <img src={"/assets/" + x.GifFileName} />
        </a>
            {x.Title}</div>
        })}
        </div>
    </div>;
  }
}