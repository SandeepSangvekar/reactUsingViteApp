
export const Practices = () =>{
    const students = [1, 2];
    console.log(students.length);
    console.log(Boolean(students.length));
    return (
        <>
        <h2>Practice with Interview questions</h2>
        {/* wrong way */}
        {/* <p>{students.length && 'No students found!'}</p> */}
        {/* <p>{!students.length && 'No students found!'}</p> */}
        <p>{Boolean(!students.length) && 'No students found!'}</p>
        {/* <p>{students.length === 0 && 'No students found!'}</p> */}
        <p>Number of Students: {students.length}</p>

        </>
    )
}