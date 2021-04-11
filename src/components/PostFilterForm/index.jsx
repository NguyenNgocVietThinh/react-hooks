import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func
};

PostFiltersForm.defaultProps = {
    onSubmit: null
}

function PostFiltersForm(props) {
    const {onSubmit} = props
    const [searchTerm, setSearchTerm] = useState('')
    // hook useRef se giu gia tri sau moi lan render
    const typingTimeoutRef = useRef(null)
   

    function handleSearchTermChange(e){
        const value = e.target.value;
        setSearchTerm(value)

        if(!onSubmit) return

        // gia tri thay doi thi se clear 
        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            }
            onSubmit(formValues)
        },300)
        
    }
    return (
        <div>
            <form>
                <input type="text" value={searchTerm} onChange={handleSearchTermChange}></input>
            </form>
        </div>
    );
}

export default PostFiltersForm;