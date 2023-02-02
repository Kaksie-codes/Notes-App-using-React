import React from 'react';
import notes from '../Components/Data';
import ListItem from '../Components/ListItem';

const NotesListPage = () => {
  return (
    <div>
        <div className="notes-list">
            {notes.map((note, index) => <ListItem key={index} note={note}/>)}
        </div>
    </div>
  )
}

export default NotesListPage;