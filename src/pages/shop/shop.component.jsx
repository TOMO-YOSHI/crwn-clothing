import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions.js'

import CollectionsOverview from "../../components/collections-overview/collections-overview";
// import categoryPage from '../collection/collectionpage.component'
import CollectionPage from "../collection/collectionpage.component";

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        
        this.unsubscribeFromSnapshot = collectionRef
          .onSnapshot(async (snapshot) => {
            // console.log(snapshot.docs[0].data());
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            // console.log(collectionsMap);
            updateCollections(collectionsMap);
          });
    }

    render(){
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );
    };
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);