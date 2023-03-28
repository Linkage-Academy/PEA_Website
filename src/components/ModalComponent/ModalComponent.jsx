import {Button, Modal, Select, Stack, TextInput} from '@mantine/core';
import {useModalComponentStyles} from './ModalComponent.styles';
import {useForm} from '@mantine/form';

function ModalComponent(props) {
    const {opened, open, close} = props;
    const {classes} = useModalComponentStyles();
    const form = useForm({
        initialValues: {
            name: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            course: "",
        }
    })

    const onSubmit = form.onSubmit(async values => {
        await fetch("https://emailweb.onrender.com/send_email", {method: "post", body: values})
        form.reset()
        close()
    })

    return (

        <Modal className={classes.modalStyle} opened={opened} onClose={close} title="Inscripción">
            <form method={"POST"} onSubmit={onSubmit}>
                <Stack>

                    <TextInput
                        label="Nombre"
                        placeholder="John"
                        {...form.getInputProps("name")}
                        required
                    />
                    <TextInput
                        label="Apellido"
                        placeholder="Doe"
                        {...form.getInputProps("lastName")}
                        required
                    />
                    <TextInput
                        label="Correo"
                        placeholder="your@email.com"
                        {...form.getInputProps("email")}
                        required
                    />
                    <TextInput
                        label="Número Telefónico"
                        placeholder="+505 8888 8888"
                        {...form.getInputProps("phoneNumber")}
                        required
                    />
                    <Select
                        label="Selecciona el curso deseado"
                        placeholder='¡Enrolate!'
                        data={[
                            {value: 'CI', label: 'Curso Infantil'},
                            {value: 'CW', label: 'Curso Web'},
                        ]}
                        {...form.getInputProps("course")}
                        required
                    />
                    <Button fullWidth type={"submit"}>Inscribete</Button>
                </Stack>
            </form>
        </Modal>


    );
}

export default ModalComponent;