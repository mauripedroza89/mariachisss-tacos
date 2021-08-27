import React from 'react';

function FoodGrid(){
    return(
        <div className="box" style={{width:450, height:80, marginLeft:30, marginTop:20}} >
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={'https://media.istockphoto.com/photos/tortilla-wrap-with-fried-minced-meat-and-vegetables-picture-id1134104922?k=6&m=1134104922&s=612x612&w=0&h=uHvx-DCHljM8ivxDAGN5NgQbuFmZFQ8tz5NAyoXSEo0='} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content" style={{marginRight:100}}>
        <p>
          <strong >Burrito</strong> <br />
          <small>Your choice of protein, lettuce, tomato, avocado and sour cream.</small><br/>
          <small>Price: $7</small>

        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input style={{width:50, height:40, marginLeft:50 }}  className="input" type="number"  />
        </div>
        <div className="control">
          <button   className="button is-info" >
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
    )
}

export default FoodGrid;