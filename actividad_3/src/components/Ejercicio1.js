export default props =>
<select value={props.value} onChange={props.onChange}> 
{props.items.map(val => (
<option value={val}>{val}</option>
))}
</select>
//Falta un key del select y salta un warning