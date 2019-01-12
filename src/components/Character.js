import React, { Component } from "react";
import axios from "axios";
import classNames from "classnames";
import Films from "./Films";
import ErrorMessage from "./ErrorMessage";
import PropTypes from "prop-types";

class Character extends Component {
  state = {
    showFilmInfo: false,
    filmData: [],
    errorLoading: false,
    errorMessage: ""
  };

  toggleFilmData = () => {
    const { showFilmInfo } = this.state;
    if (showFilmInfo) {
      this.setState({ showFilmInfo: false });
    } else {
      this.getFilmLinks();
    }
  };

  getFilmLinks = async () => {
    const character = this.props.character;
    const { errorLoading } = this.state;
    let { filmData } = this.state;

    if (!filmData.length && !errorLoading) {
      try {
        const res = await axios.get(character.url);
        const filmUrls = res.data.films;
        const filmRequestData = await this.getFilmData(filmUrls);
        filmData = filmRequestData.map(filmRequest => {
          return filmRequest.data;
        });
        this.setState({ filmData: filmData });
      } catch (e) {
        this.setState({
          showFilmInfo: true,
          errorLoading: true,
          errorMessage: `${
            character.name
          }'s films seem to be lost in the galaxy`
        });

        return;
      }
    }
    this.setState({ showFilmInfo: true });
  };

  getFilmData = async arr => {
    const filmData = [];
    for (let i = 0; i < arr.length; i++) {
      filmData.push(axios.get(arr[i]));
    }
    return axios.all(filmData);
  };

  render() {
    const { name } = this.props.character;
    const { showFilmInfo, filmData, errorLoading, errorMessage } = this.state;

    const cardBody =
      showFilmInfo && !errorLoading ? (
        <Films films={filmData} />
      ) : showFilmInfo && errorLoading ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : null;
    return (
      <div className="col-xs-12 col-sm-8">
        <div className="card card-body mb-3">
          <h4>
            {name}{" "}
            <span className="small caret-character">
              <i
                onClick={this.toggleFilmData}
                className={classNames("fas", {
                  "fa-caret-down": !showFilmInfo,
                  "fa-caret-up": showFilmInfo
                })}
              />
            </span>
          </h4>
          {cardBody}
        </div>
      </div>
    );
  }
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
