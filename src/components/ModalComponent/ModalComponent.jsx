import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group, TextInput, Select } from '@mantine/core';

function ModalComponent(props) {
  const {opened, open, close } = props;

  return (
    
      <Modal opened={opened} onClose={close} title="Authentication">
      <form>
            <TextInput label="Nombre" placeholder="John"/>
            <TextInput label="Apellido" placeholder="Doe"/>
            <TextInput label="Correo" placeholder="your@email.com"/>
            <TextInput label="Número Telefónico" placeholder="+505 8888 8888"/>
            <Select label="Selecciona el curso deseado" placeholder='¡Enrolate!'
            data={[
                {value:'CI', label:'Curso Infantil'},
                {value:'CW', label:'Curso Web'},
            ]} />
                    
                    
            
        </form>
      </Modal>


  );
}

export default ModalComponent;