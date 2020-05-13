import React from "react";
import axios from 'axios';
import ImageList from "../components/ImageList";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value:"", images: [], loading: false  };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }

      handleChange(event) {
        this.setState({images: []})
        this.setState({ value: event.target.value });
      }

      handleSubmit(event) {
        console.log("submitting...")
        this.setState({loading: true})
        console.log(this.state.loading)
        const fetchPhotos = async () => {
            const result = await axios.get('https://api.unsplash.com/search/photos', {
                params: { query: this.state.value},
                headers: {
                    Authorization: 'Client-ID QjOVQCynw3IalXqFHziKAPKL8hmkCNw6OAz2S0hg2VE'
                }
            })
            this.setState({ images: result.data.results })
            this.setState({ loading: false })

        };
        fetchPhotos();
        event.preventDefault();
      }

      render() {
        return (
          <>
           <form onSubmit={this.handleSubmit} className="form-inline">
                <div className="input-group md-form form-sm form-1 pl-0">
                    <label>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        className="form-control form-rounded"
                    />
                    </label>
                    <div><span>&nbsp;&nbsp;&nbsp;</span></div>
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-primary"
                    />
                </div>
                
            </form>

            <p></p>

            {this.state.loading ? 'Searching...':''}
            {this.state.images.length > 0 ? <ImageList resultImages={this.state.images}></ImageList> : ''}
          </>
        )};
    }


export default Search;