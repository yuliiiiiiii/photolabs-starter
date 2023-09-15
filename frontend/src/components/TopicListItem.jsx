import React from "react";

import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   title: "Nature",
// };

const TopicListItem = (props) => {
  const {title} = props.DataForTopicListItem;
  const {id, selectTopic} = props

  const handleClick = () => {
     selectTopic(id)
  }

  return (
    <div className="topic-list__item">
      <span onClick={handleClick}>
        {title}
      </span>
    </div>
  );
};

export default TopicListItem;
