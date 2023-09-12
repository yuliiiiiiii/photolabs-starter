import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
import topics from "mocks/topics";

// const sampleDataForTopicList = [
//   {
//     id: "1",
//     slug: "topic-1",
//     title: "Nature",
//   },
//   {
//     id: "2",
//     slug: "topic-2",
//     title: "Travel",
//   },
//   {
//     id: "3",
//     slug: "topic-3",
//     title: "People",
//   },
// ];

const topicListItemsArray = topics.map(DataForTopicListItem => <TopicListItem DataForTopicListItem={DataForTopicListItem} key={DataForTopicListItem.id}/>)

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topicListItemsArray}
    </div>
  );
};

export default TopicList;
