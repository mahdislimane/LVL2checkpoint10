import React, { Component } from "react";
import Search from "./Search";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          name: "Contagion",
          source:
            "https://hqq.tv/player/embed_player.php?vid=b0c1V1o4NUVsamdzTU40QkNsYlhlQT09&autoplay=no",
          description: "Contagion le film qui parle du coronavirus"
        },
        {
          name: "Sonic",
          source:
            "https://hqq.tv/player/embed_player.php?vid=VDBuNVVjaVAyem8rOWdPMVhEUHp3QT09&autoplay=no",
          description: "Sonic"
        },
        {
          name: "SPIDER-MAN HOMECOMING",
          source:
            "https://hqq.tv/player/embed_player.php?vid=a2VjMGFRR0lpZDY0Y2gvWmxoanMxdz09&autoplay=no",
          description: "SPIDER-MAN HOMECOMING"
        }
      ],
      name: "",
      source: "",
      description: "",
      keyword: ""
    };
  }
  search = word => {
    this.setState({ keyword: word });
  };
  render(props) {
    return (
      <div className="container-fluid row" style={{ textAlign: "center" }}>
        <div className="col-sm-2 col-0">
          {" "}
          <Search setKeyWord={x => this.search(x)} />
        </div>
        <div className="col-sm-8 col-12">
          <div className="col-lg-4 col-0"></div>
          <div className="col-lg-4 col-12">
            {this.state.movies
              .filter(el =>
                el.name.toUpperCase().includes(this.state.keyword.toUpperCase())
              )
              .map(x => (
                <button
                  style={{ marginTop: "20px" }}
                  onClick={() =>
                    this.setState({
                      name: x.name,
                      source: x.source,
                      description: x.description
                    })
                  }
                >
                  {x.name}
                </button>
              ))}
          </div>
          <div className="col-lg-4 col-0"></div>
          <div className="col-lg-4 col-0"></div>
          <div
            className="col-lg-4 col-12"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <h1>{!this.state.name ? "Choose One" : this.state.name}</h1>
            <iframe
              src={this.state.source && this.state.source}
              width="400"
              height="auto"
              webkitAllowFullScreen
              mozallowfullscreen
              allowfullscreen
              frameborder="0"
              scrolling="no"
            />

            <p className="col-12">{this.state.description}</p>
          </div>
          <div className="col-lg-4 col-0"></div>
        </div>
        <div className="col-sm-2 col-0"></div>
      </div>
    );
  }
}
