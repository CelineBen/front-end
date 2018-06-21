import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class Home extends React.Component<any, any> {
  public static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  public render() {
    const { user } = this.props;

    return (
      <div>
        <h1>{`Welcome, ${user.username}`}</h1>
      </div>
    )
  }
}
