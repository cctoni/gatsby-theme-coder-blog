import React from 'react';

const CustomComp = props => (
  <div style={styles.content}>
    <h1 style={styles.title}>{props.title}</h1>
    <img src={props.imgSrc} style={styles.image} />
    <p>{props.details}</p>
  </div>
);

const styles = {
  content: {
    border: 'solid 2px black',
    borderRadius: 6,
    color: 'white',
    background: 'black',
  },
  title: {
    fontFamily: "'Fira Code', monospace",
    color: '#00bcd4',
    fontWeight: 'bold',
  },
  image: {
    height: 'auto',
    width: '100%',
    objectFit: 'contain',
  },
};

export default CustomComp;
