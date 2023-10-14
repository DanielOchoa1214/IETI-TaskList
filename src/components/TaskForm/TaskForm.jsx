import { useForm } from "react-hook-form";
import "./TaskForm.scss"

export function TaskForm(props) {
    const {register, handleSubmit, formState : { errors }} = useForm({
        mode: "onChange"
    });
    const { onCreate } = props;

    const onSubmit = (data) => {
        console.log(data);
        let newTask = {
            name: data.name,
            description: data.description
        };
        onCreate(newTask);
    };

    return (
        <>
        <form id="add-form" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>
                    Nombre:
                    <input type="text" 
                    {...register("name", {
                        required: "Name is required",
                        minLength: {
                            value: 3,
                            message: "Name is too short"
                        }
                    })}
                    />
                </label>
                {errors.name?.message && (<small>{errors.name.message}</small>)}
            </div>
            <div>
                <label>
                    Descripcion:
                    <input type="text" 
                    {...register("description")}
                    />
                </label>
            </div>
            <button>Create</button>
        </form>
        </>
    );
    
}