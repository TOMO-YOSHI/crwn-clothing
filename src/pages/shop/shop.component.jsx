import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions.js';
// import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';

// import WithSpinner from '../../components/with-spinner/with-spinner.component';

// import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from '../collection/collection.container';
// import categoryPage from '../collection/collectionpage.component'
// import CollectionPage from "../collection/collectionpage.component";

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

    // state = {
    //     loading: true
    // };

    // unsubscribeFromSnapshot = null;

    // componentDidMount() {
        // const { updateCollections } = this.props;
        // const collectionRef = firestore.collection('collections');
        
        // // fetch(
        // //   "https://firestore.googleapis.com/v1/projects/crwn-db-6bdf0/databases/(default)/documents/collections"
        // // )
        // // .then(response => response.json())
        // // .then(collections => console.log(collections))

        // this.unsubscribeFromSnapshot = collectionRef
        //   .onSnapshot(async (snapshot) => {
        //     // console.log(snapshot.docs[0].data());
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     // console.log(collectionsMap);
        //     updateCollections(collectionsMap);
        //     this.setState({ loading: false });
        //   });
    // }

    render(){
        const { match } = this.props;
        // const { loading } = this.state;

        return (
          <div className="shop-page">
            <Route
              exact
              path={`${match.path}`}
              component={CollectionsOverviewContainer}
              // render={(props) => (
              //   <CollectionsOverviewWithSpinner
              //     isLoading={isCollectionFetching}
              //     {...props}
                />
            <Route
              path={`${match.path}/:collectionId`}
              component={CollectionPageContainer}
              // render={(props) => (
              //   <CollectionPageWithSpinner
              //     isLoading={!selectIsCollectionsLoaded}
              //     {...props}
                />
          </div>
        );
    };
}

// const mapDispatchToProps = dispatch => ({
//     updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
// })

// const mapStateToProps = createStructuredSelector({
//   selectIsCollectionsLoaded: selectIsCollectionsLoaded
// })

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);