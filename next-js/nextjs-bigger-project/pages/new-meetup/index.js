import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
    const onAddMeetuoHandler = (enteredMeetupData) =>{
        console.log(enteredMeetupData)
    }

    return <NewMeetupForm onAddMeetup={onAddMeetuoHandler}/>
}

export default NewMeetupPage;