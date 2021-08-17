import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Searchbar.module.css';

class Searchbar extends Component {
    state = {
        query: '',
    };

    handleChange = event => {
        this.setState({ query: event.currentTarget.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const { query } = this.state;
        if (!query) return;

        this.props.onSubmit(query);
        this.setState({ query: '' });
    };

    render() {
        return (
            <header className={style.Searchbar}>
                <form className={style.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={style.SearchForm__button}>
                        <span className={style.SearchForm__button__label}>Search</span>
                    </button>

                    <input
                        className={style.SearchForm__input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.query}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;