import React, {Component} from 'react'
import FormikForm from './cont-comps/container/form_container'
import Listing from './cont-comps/components/lising' 
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from  '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom'



function TabContainer({ childern , dir }) {
	return (
		<Typography component="div" dir={dir} style={{ padding: 8 * 3}}>
			{childern}
		</Typography>
	);
}

TabContainer.propsTypes = {
	childern: PropTypes.node.isRequired,
	dir: PropTypes.string.isRequired
}

const styles = theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		//width: 500
	}
});

class NavTab extends Component {
	state = {
		value: 0
	};

	handleChange = ( event , value ) => {
		this.setState({value});
	};

	handleChangeIndex = index => {
		this.setState({ value: index });
	};

	render() {
		const {classes, theme} = this.props;
		return(
			<BrowserRouter>
				<div className={classes.root}>
					<AppBar position="static" color="default">
						<Tabs
							value={this.state.value}
							onChange={this.handleChange}
							indicatorColor="primary"
							textColor="primary"
							//fullWidth
						>
							<Tab label="Listing" component={Link} to="/" />
							<Tab label="NewUser" component={Link} to="new_user" />
						</Tabs>	
					</AppBar>
					<Switch>
						<Route exact path="/" component={TabOne} />
            <Route exact path="/new_user" component={TabTwo} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

NavTab.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

function TabOne() {
	return(
		<Paper>
			<div>
				<Listing />
			</div>
		</Paper>
	)
}

function TabTwo() {
	return(
		<Paper>
			<div>
				<FormikForm />
			</div>
		</Paper>
	)
}


export default withStyles(styles, {withTheme: true})(NavTab)