import React from 'react'
import './Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterVideoEmbed,
    TwitterTweetEmbed,
    TwitterMomentShare
} from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="Widgets">
            <div className="Widgets__input">
                <SearchIcon className="Widgets__searchIcon"/>
                <input type="text" placeholder="Search Twitter"/>
            </div>
            <div className="Widgets__container">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={'783943172057694208'} />
                <TwitterTweetEmbed tweetId={'771763270273294336'} />
                <TwitterTimelineEmbed sourceType="profile" screenName="saurabhnemade" options={{height: 400}} />
                <TwitterVideoEmbed id={'560070183650213889'} />
                <TwitterMomentShare momentId={'650667182356082688'} />
                <TwitterTweetEmbed tweetId={"692527862369357824"} />
            </div>
        </div>
    )
}

export default Widgets
