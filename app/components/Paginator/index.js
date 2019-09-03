/**
 *
 * Paginator
 *
 */
import React from 'react';
import { createUltimatePagination } from 'react-ultimate-pagination';

function Paginator(props) {
  return (
    <button
      style={props.isActive ? { fontWeight: 'bold' } : null}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.value}
    </button>
  );
}

function Ellipsis(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      ...
    </button>
  );
}

function FirstPageLink(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      First
      {/* <i className="fa fa-angle-double-left" /> */}
    </button>
  );
}

function PreviousPageLink(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      Previous
      {/* <i className="fa fa-angle-left" /> */}
    </button>
  );
}

function NextPageLink(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      Next
      {/* <i className="fa fa-angle-right" /> */}
    </button>
  );
}

function LastPageLink(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      Last
      {/* <i className="fa fa-angle-double-right" /> */}
    </button>
  );
}

function Wrapper(props) {
  return <div className="pagination">{props.children}</div>;
}

const itemTypeToComponent = {
  PAGE: Paginator,
  ELLIPSIS: Ellipsis,
  FIRST_PAGE_LINK: FirstPageLink,
  PREVIOUS_PAGE_LINK: PreviousPageLink,
  NEXT_PAGE_LINK: NextPageLink,
  LAST_PAGE_LINK: LastPageLink,
};

Paginator.propTypes = {};

export const UltimatePagination = createUltimatePagination({
  itemTypeToComponent,
  WrapperComponent: Wrapper,
});
