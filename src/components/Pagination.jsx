import React from 'react';

const Pagination = ({page, changepage}) => {
  return ( 
    <div className="pagination">
    <button className="pagichange"  onClick={()=>changepage('p1')}>{'<<'}</button>
    <button className="pagichange" onClick={()=>changepage('p2')}>{'<'}</button>
    <button className="pagichange" id='p3'>{page}</button>
    <button className="pagichange" onClick={()=>changepage('p4')}>{'>'}</button>
    <button className="pagichange" onClick={()=>changepage('p5')}>{'>>'}</button>
</div>
  )
};

export default Pagination;
