import React from 'react';
class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    console.log(this.props.match);
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            Movie page
          </div>
        </div>
      </div>
    )
  }
}
export default Movie;