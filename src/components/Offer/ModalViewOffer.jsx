import React from 'react'
//Reactstrap
import {
  Button,
  FormGroup,
  FormText,
  Label,
  Input,
  Col,
  Container,
  Form,
  Row,
} from "reactstrap";
import dataLocation from '../../utils/dataLocation/dataLocation.json'

export const ModalViewOffer = (props) => {
  const { company,  jobTitle, program, vacancies, description, tasks, salary, contractType, duration, modality, department, city } = props;

  return (
    <div className="modal-dialog modal-lg" id="offerModal">
      <Form className="mt-4">
        <FormGroup id='form-offer' row className="mb-3">
          <Col sm="12" md="4">
            <Label for="jobTitle">Práctica</Label>
            <Input
              id="jobTitle"
              name="jobTitle"
              placeholder="Ingrese el cargo a desempeñar"
              type="text"
              value={jobTitle}
              readOnly
              disabled
            />
          </Col>

          <Col sm="12" md="6">
            <Label for="program">Programa</Label>
            <Input id="program" name="program" type="select" value={program} readOnly
              disabled>
              <option key={0} value={0}>Seleccione un programa</option>
              <option key={1} value="Administracion de Agro-negocios">Administración de Agro-negocios</option>
              <option key={2} value="Administración de Empresas">Administración de Empresas</option>
              <option key={3} value="Ciencia Politica">Ciencia Política</option>
              <option key={4} value="Computacion Cientifica">Computación Científica</option>
              <option key={5} value="Comunicacion Grafica Publicitaria">Comunicación Gráfica Publicitaria</option>
              <option key={6} value="Comunicacion y Entrenamiento Digital">Comunicación y Entrenamiento Digital</option>
              <option key={7} value="Comunicacion y Lenguajes Audiovisuales">Comunicación y Lenguajes Audiovisuales</option>
              <option key={8} value="Comunicacion y Relaciones Corporativas">Comunicación y Relaciones Corporativas</option>
              <option key={9} value="Contaduria Publica">Contaduría Pública</option>
              <option key={10} value="Derecho">Derecho</option>
              <option key={11} value="Diseño y Gestion de la Moda y el Textil">Diseño y Gestión de la Moda y el Textil</option>
              <option key={12} value="Diseño y Gestion del Producto">Diseño y Gestión del Producto</option>
              <option key={13} value="Economia">Economía</option>
              <option key={14} value="Ingenieria Ambiental">Ingeniería Ambiental</option>
              <option key={15} value="Ingenieria Civil">Ingeniería Civil</option>
              <option key={16} value="Ingenieria de Sistemas">Ingeniería de Sistemas</option>
              <option key={17} value="Ingenieria Electronica">Ingeniería Electrónica</option>
              <option key={18} value="Ingenieria en Energia">Ingeniería en Energía</option>
              <option key={19} value="Ingenieria en Telecomunicaciones">Ingeniería en Telecomunicaciones</option>
              <option key={20} value="Ingenieria Financiera">Ingeniería Financiera</option>
              <option key={21} value="Ingenieria Industrial">Ingeniería Industrial</option>
              <option key={22} value="Investigacion Criminal">Investigación Criminal</option>
              <option key={23} value="Mercadeo">Mercadeo</option>
              <option key={24} value="Negocios Internacionales">Negocios Internacionales</option>
              <option key={25} value="Psicologia">Psicología</option>
            </Input>
          </Col>

          <Col sm="2" md="2">
            <Label for="vacancies">Vacantes</Label>
            <Input
              id="vacancies"
              name="vacancies"
              placeholder="Cantidad de vacantes"
              type="vacancies"
              value={vacancies}
              readOnly
              disabled
            />
          </Col>
        </FormGroup>

        <FormGroup row className="mb-3">
          <Col sm="12" md="6">
            <Label for="description">Descripción</Label>
            <textarea
              className='form-control rounded-0'
              id="description"
              name="description"
              placeholder="Ingrese la descripción de la oferta"
              type="text"
              value={description}
              readOnly
              disabled
              rows={3}
            ></textarea>
          </Col>
          <Col sm="12" md="6">
            <Label for="tasks">Tareas</Label>
            <textarea
              className='form-control rounded-0'
              id='tasks'
              name="tasks"
              placeholder="Ingrese las tareas a realizar"
              type="text"
              value={tasks}
              readOnly
              disabled
              rows={3}></textarea>
          </Col>
        </FormGroup>

        <FormGroup row className="mb-3">
          <Col sm="12" md="4">
            <Label for="contractType">Tipo de Contrato</Label>
            <Input id="contractType" name="contractType" type="select" value={contractType} readOnly
              disabled>
              <option key={0} value="">Seleccione un contrato</option>
              <option key={1} value="Aprendizaje">Aprendizaje</option>
              <option key={2} value="Termino Fijo">Término Fijo</option>
              <option key={3} value="Termino Indefinido">Término Indefinido</option>
            </Input>
          </Col>

          <Col sm="12" md="4">
            <Label for="duration">Duración del Contrato</Label>
            <Input id="duration" name="duration" type="select" value={duration} readOnly
              disabled>
              <option key={0} value="">Seleccione una opción</option>
              <option key={1} value="6 Meses">6 Meses</option>
              <option key={2} value="12 Meses">12 Meses</option>
            </Input>
          </Col>

          <Col sm="12" md="4">
            <Label for="modality">Tipo de Modalidad</Label>
            <Input id="modality" name="modality" type="select" value={modality} readOnly
              disabled>
              <option key={0} value="">Seleccione una modalidad</option>
              <option key={1} value="Presencial">Presencial</option>
              <option key={2} value="Remoto">Remoto</option>
              <option key={2} value="Hibrido">Híbrido</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row className='mb-3'>
          <Col sm="12" md="4">
            <Label for="department_select">Departamento</Label>
            <Input
              id="department"
              name="department"
              type="select"
              value={department}
              readOnly
              disabled
            >
              <option key={0} value="">Seleccione un departamento</option>
              {dataLocation.map(item => {
                return <option key={item.id + 1} value={item.departamento}>{item.departamento}</option>
              })}
            </Input>
          </Col>
          <Col sm="12" md="4">
            <Label for="city_select">Ciudad</Label>
            <Input id="city" name="city" type="select" value={city} readOnly
              disabled>
              <option key={0} value="">Seleccione una ciudad</option>
              {department ?
                dataLocation.find(d => d.departamento === department)
                  .ciudades.map((ciudad, idx) => {
                    return <option key={idx} value={ciudad}>{ciudad}</option>
                  })
                : null
              }
            </Input>
          </Col>
          <Col sm="12" md="4">
            <Label for="salary">Salario</Label>
            <Input
              id="salary"
              name="salary"
              placeholder="Salario a devengar"
              type="number"
              value={salary}
              readOnly
              disabled
            />
          </Col>
        </FormGroup>

        <Row className="mb-2 justify-content-center">
          <Col sm="8">
            <button className='btn btn-outline-secondary'>Cerrar</button>
          </Col>
        </Row>
      </Form>
    </div>
  )
} 
