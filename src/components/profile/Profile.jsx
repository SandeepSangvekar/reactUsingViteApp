// import {ProfileCard} from './ProfileCard';
function Profile(){
    return (
        <>
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
                name="Bob"
                age={25}
                greeting={
                    <div>
                        <strong>Hello Bob, Keep up the great work!</strong>
                    </div>
                    
                    }
                >
                    <p>Hobbies: Gaming, Cooking</p>
                    <button>Contact</button>
            </ProfileCard>
            <ProfileCard
                name="Lisa"
                age={23}
                greeting={
                    <div>
                        <strong>Hello Lisa, Keep up the great work!</strong>
                    </div>
                    
                    }
                >
                    <p>Hobbies: Gaming, Cooking</p>
                    <button>Contact</button>
            </ProfileCard>
        </div>
        </>
        
    )
}
export default Profile;

function ProfileCard(props){
    // to destructuring data
    const {name, age, greeting, children} = props
    // 2nd direct way function ProfileCard({name, age, greeting, children})
    return (
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Greeting: {greeting}</p>
            <div>{children}</div>
        </>
    )
}