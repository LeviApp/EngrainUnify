import React from "react";
function Nav(props) {
    return (
            <nav>
                <section>
                <h2>Units Per Page: {props.pageInfo.current_page} </h2>
                <select name="cars" id="cars">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="75">75</option>
                    <option value="100">100</option>
                </select>
                </section>

                <section>
                
                <button>
                    <img src="https://pkstatic.imgix.net/media/companyprofile/2693/engrain-logo.jpg" />
                </button>
                <h2>Current Page</h2>
                <input type="number" defaultValue={props.pageInfo.current_page} min="1" max={props.pageInfo.total_pages} />
                <h2>of {props.pageInfo.total_pages}</h2>
                <button>
                    <img src="https://pkstatic.imgix.net/media/companyprofile/2693/engrain-logo.jpg" />
                </button>
                </section>
            </nav>
    );
  }
  
  export default Nav;